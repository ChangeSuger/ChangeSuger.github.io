---
title: CRC校验位
date: 2023-02-14
updated: 2023-03-08
tags:
categories:
---

校验位是为了保证数据在传输过程中的完整性，采用一种指定的算法对原始数据进行计算，得出的一个校验值。接收方接收到数据时，采用同样的校验算法对原始数据进行计算，如果计算结果和接收到的**校验值一致**，说明数据校验正确，这一帧数据可以使用，如果不一致，说明传输过程中出现了差错，这一帧数据丢弃，请求重发

常用的校验算法有奇偶校验、校验和、CRC，还有 LRC、BCC 等不常用的校验算法

循环冗余校验（Cyclic Redundancy Check， CRC）是一种根据网络数据包或计算机文件等数据产生简短固定位数校验码的一种信道编码技术，主要用来检测或校验数据传输或者保存后可能出现的错误。它是利用除法及余数的原理来作错误侦测的

### 生成 CRC 校验位

一个完整的 CRC 参数模型应该包含以下信息：

- `NAME`：参数模型名称
- `WIDTH`：宽度，即生成的 CRC 数据位宽，如 CRC-8，生成的 CRC 为 8 位
- `POLY`：十六进制多项式，省略最高位1，如 x8 + x2 + x + 1，二进制为 1 0000 0111，省略最高位 1，转换为十六进制为 0x07
- `INIT`：CRC 初始值，和 `WIDTH` 位宽一致，默认 `INIT = 0x00`
- `REFIN`：true 或 false ，在进行计算之前，原始数据是否翻转，如原始数据：$0x34 = 0011 0100$，如果 `REFIN` 为 true，进行翻转之后为 $0010 1100 = 0x2c$ ，默认为 false
- `REFOUT`：true 或 false，运算完成之后，得到的 CRC 值是否进行翻转，如计算得到的 CRC 值：$0x97 = 1001 0111$，如果 `REFOUT` 为 true ，进行翻转之后为 $11101001 = 0xE9$ ，默认为 false
- `XOROUT`：计算结果与此参数进行异或运算后得到最终的 CRC 值，和 `WIDTH` 位宽一致，默认 `XOROUT = 0x00`

计算步骤：

1. 原始数据与 `INIT` 进行异或运算（如果 `INIT=0x00` ，则结果为原始数据）
2. 如果 `REFIN = TURE` ，则上一步处理后的数据进行翻转，否则什么也不干
3. 上一步处理后的数据左移 8 位，后面补 8 个 0
4. 上一步处理后的数据与 `POLY` 设置的多项式进行模2除法，取余数低8位
5. 上一步处理后的数据与 `XOROUT` 进行异或运算
6. 如果 `REFOUT = TURE` ，则上一步处理后的数据进行翻转，否则什么也不干
7. 输出结果为：原始数据 + CRC ，相当于原始数据左移 8 位 + 余数

> 模2除法：
>
> - 被除数的首位为 1 ，商为 1
> - 被除数的首位为 0 ，商为 0
> - 模 2 除法等同于按位异或，要保证每次除完首位都为 0 ，才能进行右移
> - 计算时每次右移一位，当被除数的位数小于除数，其为余数

计算示例：

假设使用的 CRC-8/MAXIN ，其参数为：

```
POLY = 0x31 = 0011 0001
INIT = 0x00
XOROUT = 0x00
REFIN = TRUE
REFOUT = TRUE
```

原始数据为 `0x34 = 0011 0100` ：

1. `INIT = 0x00` → $(0000\ 0000) \oplus (0011\ 0100) = (0011\ 0100)$
2. `REFIN = TRUE` → $(0011\ 0100)$ ➡ $(0010\ 1100)$
3. $(0010\ 1100)$ ➡ $(0010\ 1100\ 0000\ 0000)$
4. $(0010\ 1100\ 0000\ 0000) \% (1\ 0011\ 0001) = (1111\ 1011)$
5. `XOROUT = 0x00` → $(0000\ 0000) \oplus (1111\ 1011) = (1111\ 1011)$
6. `REFOUT = TRUE` → $(1111\ 1011)$ ➡ $(1101\ 1111)$
7. 输出结果： $(0011\ 0100\ 1101\ 1111) = \text{34DF}$

在线 CRC 计算器： [Online CRC](https://crccalc.com/)

### 验证 CRC 校验位

接收端的校验有两种方式：

一种是和 CRC 计算一样，在本地把**接收到的数据和 CRC 校验位分离**，然后在本地对数据进行 CRC 运算，得到的 CRC 值和接收到的 CRC 进行比较，如果一致，说明数据接收正确，如果不一致，说明数据有错误

另一种方法是把整个数据帧进行 CRC 运算，因为是数据帧相当于把原始数据左移 8 位，然后加上余数，如果直接对整个数据帧进行 CRC 运算（除以多项式），那么余数应该为 0 ，如果不为 0 说明数据出错

### 在 python 实现 CRC 校验

使用 python 库 `crcmod`

```python
import crcmod

# 可自行修改 crc 模型的参数
# 目前的模型为 CRC-8/MAXIN
crcFun = crcmod.mkCrcFun(0x131, initCrc=0x00, xorOut=0x00, rev=True)


def crcCreat(data):
    """
        生成 crc 校验位
        data: bytes 类型
    """
    return crcFun(data)

def crcCheckResult(data, crc):
    """
        验证 crc 校验位
        data: bytes 类型
        crc: bytes 类型
    """
    if not crcFun(data + crc):
        return True
    else:
        return False

# 简单验证
# input = int.to_bytes(52, length=1, byteorder='big')

# print(crcCreat(input))
# print(crcCheckResult(input, crcCreat(input).to_bytes(1, "big")))

# for i in range(1,256):
#     if crcCheckResult(input, int.to_bytes(i, 1, "big")):
#         print(i)
#         print(True)
```
