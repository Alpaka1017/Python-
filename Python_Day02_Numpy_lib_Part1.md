title: Python 学习日记 -- 科学计算基础NumPy - Part1
author: Xueyong Lu
date: 2022-03-20
css: ...\css\my_md_style.css

<div align = "center">
    <h1>Python学习日记</h1>
</div>
<div align = "right">
    <h2><small>科学计算基础NumPy - Part1</small></h2>
</div>

📘<<[Day 01](.\Python_Day01_Reg_Ex.md) | [Day 03](.\Python_Day03_Numpy_lib_Part2.md)]>> 

[W3school帮助手册](https://www.w3school.com.cn/python/numpy_creating_arrays.asp)

## 1. 介绍

* NumPy是Python中用于科学计算的基础软件包，提供了多种用于**数组操作**和**数学运算**的功能。NumPy能够提供一个比Python`list`对象快50倍的数组对象`ndarray`。

* 与列表不同，NumPy 数组存储在内存中的<u>一个连续位置</u>，因此进程可以非常有效地访问和操纵它们。

* 通过控制台的以下命令来安装此包：

  ```python
  pip install numpy
  ```

* 安装后通过`import`关键字来导入程序，还可以由`as`关键字来为其指定别名

  ```python
  import numpy as np
  ```

* 获取`numpy`版本

  ```python
  np.__version__
  ```

下面介绍常用的**NumPy**方法：

## 2. 方法

### 2.1 数组

#### 2.1.1 数组创建

* **0~3 dimensional arrary**

  ````python
  def np_array_dims():
      # 0-D
      arr_0d = np.array(63)
      # print('0-D array example/ scalar:', arr_0d)
      
      # 1-D
      arr_1d = np.array([1, 2, 3, 4, 5, 6])
      # print('1-D array example:', arr_1d)
      
      # 2-D：其元素为一维数组
      arr_2d = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
      # print('2-D array example:', arr_2d)
      
      # 3-D：其元素为二维数组
      arr_3d = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
      # print('3-D array example:', arr_3d)
      
      return arr_0d, arr_1d, arr_2d, arr_3d
  ````

  * **2-D**数组的元素为**1-D**数组，表示为`np.array([	[, , , ], [, , , ]	])`，NumPy中有一个专门用于处理矩阵运算的子模块==numpy.mat==

  * 同理，**3-D**数组的元素以**2-D**数组表示为：`np.array([  [ [],[] ],   [ [],[] ]   ])`

    <img src="C:\Users\Xueyong Lu\Desktop\学习\Python\.msc\pics\array_def.png" style="zoom:67%;" />

* 检查数组维数：`ndarray.ndim`属性

  ```python
  def np_array_dims():
      ...
      return arr_0d, arr_1d, arr_2d, arr_3d
  
  # 未知参数个数 *args
  def np_array_ndim(*arrs):
      for arr in arrs:
          if isinstance(arr, np.ndarray): # 或者type(arr) == np.ndarray
              print('Dimension of the array:', arr.ndim)
          else:
              return -1
              print('Not expected "np.ndarray" type!')
              
  # 主函数
  if __name__ == '__main__':
      # 2. ndim方法获取数组维数
      # 单个赋值
      arr_0d, arr_1d, arr_2d, arr_3d = np_array_dims()
      np_array_ndim(arr_0d, arr_1d, arr_2d, arr_3d)
      # 通过*运算符将np_array_dims()返回的多个数组变量进行解包
      np_array_ndim(*np_array_dims())
      
  >> Dimension of the array: 0
  >> Dimension of the array: 1
  >> Dimension of the array: 2
  >> Dimension of the array: 3
  ```

* 多维数组 `ndmin = const.`

  ```python
  def np_array_multi_dim(dim):
      arr_multi = np.array([1, 2, 3, 4], ndmin=dim)
      return arr_multi
  
  if __name__ == '__main__':
      # 3. 创建多维数组
      dim = input('Input the expected dim of array:')
      array_multi = np_array_multi_dim(int(dim))
      print(array_multi)
      print('Dimension:', array_multi.ndim)
      
  >> Input the expected dim of array:5
  >> [[[[[1 2 3 4]]]]]
  >> Dimension: 5
  ```

  *在本例数组中：最里面的维度（第 5 个 dim）有 4 个元素，第 4 个 dim 有 1 个元素为向量，第 3 个 dim 具有 1 个元素是与向量的矩阵，第 2 个 dim 有 1 个元素是 3D 数组，而第 1 个 dim 有 1 个元素，该元素是 4D 数组*

  <img src=".\.msc\pics\array_def_multi.png" style="zoom:50%;" />

* 补充：3维，多维数组的应用

  * **图像处理**：图像可以表示为三维数组，其中第一个维度表示图像的高度，第二个维度表示图像的宽度，第三个维度表示图像的通道（例如，RGB图像具有三个通道）。
  * **自然语言处理**：在自然语言处理中，文本通常表示为多维数组，其中每个维度表示不同的特征。例如，可以使用三维数组来表示每个单词的嵌入向量，其中第一个维度表示单词的数量，第二个维度表示向量中的元素数量，第三个维度表示嵌入向量的数量。
  * **科学计算**：在科学计算中，多维数组用于表示数据集、图像、声音、视频等等。例如，可以使用三维数组表示空间中的温度分布，其中第一个维度表示x轴上的位置，第二个维度表示y轴上的位置，第三个维度表示时间。
  * **机器学习**：在机器学习中，多维数组用于表示数据集、特征向量、权重矩阵、激活值等等。例如，可以使用三维数组表示卷积神经网络中的图像输入，其中第一个维度表示批处理中的图像数量，第二个维度表示图像的高度，第三个维度表示图像的宽度。

#### 2.1.2 数组索引

NumPy 数组中的索引以==0==开头（区别于Matlab的==1==），这意味着第一个元素的索引为 0，第二个元素的索引为 1，以此类推。

* **1-Dim array**

  ```python
  arr_1 = np.array([1, 2, 3, 4, 5])
  	# 格式化输出格式
      print('Summation of 1. and 4. element of a 1-D array: %d + %d = %d' % (arr_1[0], arr_1[3], arr_1[0] + arr_1[3]))
      # f-string
      print(f'Summation: {arr_1[0]} + {arr_1[3]} = {arr_1[0]+arr_1[3]}')
  
  >> Summation of elements of a 1-D array: 1 + 4 = 5
  >> Summation: 1 + 4 = 5
  ```

* **2-D Array**

  ```python
  arr_2 = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
  	# 提取二维数组中第二维的第三个元素[1,2] (索引=位置-1，区别于Matlab)
      print(f'3nd element on the 2nd dim: {arr_2[1,2]}')
      
  # 输出：
  
  >> 3nd element on the 2nd dim: 8
  ```

* **3-D Array**

  ```python
  arr_3 = np.array([[[1, 2, 3], [4, 5, 6]], 
                    [[7, 8, 9], [10, 11, 12]]])
      print(f'3rd element of 2nd array of 2nd array of the 3-D array: {arr_3[1, 1, 2]}')
      
  # 输出：3-D数组 -> 第二个元素（2-D数组） -> 第二个元素（1-D数组）-> 第三个元素（1-D向量的元素）
  
  >> 3rd element of 2nd array of 2nd array of the 3-D array: 12
  ```

* **负数索引**

  ```python
  arr_neg = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
      print('Last element from 2nd dim: ', arr_neg[1, -1])
      
  # 输出：输出第二(ind = 1)个数组的最后一个元素
  
  >> Last element from 2nd dim:  10
  ```

#### 2.1.3 数组切片

对NumPy的**.ndarray**对象进行切片时有：**`[start：end：step]`**，默认值分别为**`[0: len(ndarray): 1]`**。

* **向量裁切**

  * **正向切片**

    ```python
    arr = np.array([1, 2, 3, 4, 5, 6, 7])
    
    # 简单切片
    arr[1:5] # [2,5] --> [2 3 4 5]
    
    # 指定结束索引
    arr[:4] # [1,4]
    
    >> [1 2 3 4]
    ```

      *切片操作返回的结果**包括开始索引**，但**不包括结束索引 $\Rightarrow$ 实际位置 [start+1, end]**。*

  * **负向切片**

    ```python
    arr = np.array([1, 2, 3, 4, 5, 6, 7])
    # 负向裁切
    arr[-3:-1] # 从末尾开始的索引 3 到末尾开始的索引 1
    		   # 实际位置 [-(|start|+1),-(|end|+2)]
        
    >> [4 5]
    ```

  * **指定步长**

    ```python
    arr = np.array([1, 2, 3, 4, 5, 6, 7])
    # 指定起始、间隔
    arr[1:5:2] # 实际位置[2,5] --> [2 4]
    
    # 指定间隔
    arr[::2] 
    
    >> [1 3 5 7]
    ```

* **2-D数组裁切**

  对2维数组进行切片时，**`arr[arg1, arg2]`**其中**`arg1`**为二维数组的单个向量（元素）的索引，**`arg2`**才是对应的向量中元素的索引

  * **某个向量的索引元素**

    ```python
    arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
    # 提取二维数组：第2个向量的第2-4个元素
    print(arr[1, 1:4]) 
    
    >> [7 8 9]
    ```

  * **多个向量的同一索引元素**

    ```python
    arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
    # 提取第1~2个向量的：第5个元素
    print(arr[0:2, 4]) 
    
    >> [5 10]
    ```

  * **多个向量的多个元素**

    ```python
    arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
    # 提取第1~2个向量的：第3~5个元素
    print(arr[0:2, 2:5]) 
    
    >> [ [3 4 5], [8 9 10] ]
    ```

### 2.2 NumPy数据类型

在Python中，默认有以下几种数据类型：**strings**, **integer**, **float**, **boolean**, **complex**。

对于NumPy库有几类扩展的数据类型：

| **`i`**  | **`b`**  |    **`u`**     | **`f`**  |   **`c`**    |    **`m`**    |   **`M`**    | **`O`**  |  **`S`**   |   **`U`**   |               **`V`**               |
| :------: | :------: | :------------: | :------: | :----------: | :-----------: | :----------: | :------: | :--------: | :---------: | :---------------------------------: |
| **整数** | **布尔** | **无符号整数** | **浮点** | **复合浮点** | **timedelta** | **timedate** | **对象** | **字符串** | **unicode** | **固定的其他类型的内存块 ( void )** |

NumPy中提供了一些方法，用以检查数组的数据类型、指定数组类型等。

#### **2.2.1 检查数据类型**

```python
import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr.dtype)

>> int32 
# 默认整数数组的类型为：int32
```

#### 2.2.2 指定创建数据类型

```python
import numpy as np

arr = np.array([1, 2, 3, 4], dtype='S') # 指定数组[1, 2, 3, 4]的类型为字符串“S”

print(arr)
print(arr.dtype)
print(arr.dtype == '|S1')

>> [b'1' b'2' b'3' b'4']
>> |S1
>> True
```

#### 2.2.3 指定类型并定义大小

```python
arr = np.array([1, 2, 3, 4], dtype='i4') # 4字节整数类型
										 # i8 -> int64
print(arr)
print(arr.dtype)
print(len(arr))

>> [1 2 3 4]
>> int32
>> 4
```

* 如果数据类型无法被强制转换，则会抛出**`ValueError`**的错误

  ```python
  arr = np.array(['a', '2', '3'], dtype='i')
  
  >> ValueError: invalid literal for int() with base 10: 'a'
  ```

#### 2.2.4 转换类型

* 用**`astype()`**函数创建数组的==副本==，并允许将数据类型指定为参数

  ```python
  arr = np.array([1.1, 2.1, 3.9])
  newarr = arr.astype('i')
  # newarr = arr.astype(int)
  
  print(newarr)
  print(newarr.dtype)
  
  >> [1 2 3]
  >> int32
  ```

  * NumPy中，要将`float`类型转换为`int`类型，结果==只会保留其整数部分==

* **`astype()`**另一个例子

  ```python
  arr = np.array([1.1, 2.1, 3.9, 0, -2])
  newarr = arr.astype('bool')
  # newarr = arr.astype(bool)
  
  print(newarr)
  print(newarr.dtype)
  
  >> [ True  True  True False  True]
  >> bool
  ```

### 2.3 数组副本和视图

|             副本             |             视图             |
| :--------------------------: | :--------------------------: |
|        拥有独立的数据        |       不拥有独立的数据       |
| 副本的更改==不影响==原始数组 | 视图的更改==会影响==原始数组 |
| 原始数组的更改==不影响==副本 | 原始数组的更改==会影响==视图 |

#### 2.3.1 副本

创建副本为**`array.copy()`**函数，此函数不依赖NumPy库。在进行复制之后的副本和原始的数组的改变都==不会==相互影响。

```python
arr = np.array([1, 2, 3, 4, 5])
x = arr.copy()
arr[0] = 61

print(arr) 
print(x)

>> arr = [1 2 3 4 5]
>> x = [61 2 3 4 5]
```

#### 2.3.2 视图

数组视图为**`array.view()`**，此函数为NumPy独有的方法。

```python
arr = np.array([1, 2, 3, 4, 5])
x = arr.view()
arr[0] = 61
# x[0] = 61

print(arr)
print(x)

>> [61 2 3 4 5]
>> [61 2 3 4 5]
```

* 检查对象是否有数据：检查是否为副本还是视图**`ndarray.base`**，只有NumPy的数组对象才具有`.base`的方法

```python
arr = np.array([1, 2, 3, 4, 5])

x = arr.copy()
y = arr.view()

print(x.base)
print(y.base)

>> None 		# 副本 -> 有数据 -> 返回None
>> [1 2 3 4 5]  # 视图 -> 无数据 -> 返回原始数组
```

### 2.4 数组的形状和重塑

#### 2.4.1 数组的形状`.shape`

* 获取数组的各个维度

  ```python
  arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
  
  print(arr.shape)
  print(arr.ndim)
  
  >> (2, 4)
  >> 2
  # ndarray.shape属性返回一个元组，该元组分别为数组的维度 -> arr有两个维度，每个维度有4个元素
  ```

* 创建多维数组，并验证各个维度

  ```python
  arr = np.array([1, 2, 3, 4], ndmin=5)
  
  print(arr)
  print('shape of array :', arr.shape)
  
  >> [[[[[1 2 3 4]]]]]
  >> (1, 1, 1, 1, 4) # 5个维度分别具有的元素个数：1 1 1 1 4
  >> 5
  ```

#### 2.4.2 数组重塑`.reshape`

* **1-D到2-D**

  ```python
  arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  newarr = arr.reshape(4, 3)
  
  print(newarr)
  
  >> [[ 1  2  3]
     [ 4  5  6]
     [ 7  8  9]
     [10 11 12]]
  ```

* **1-D到3-D**

  ```python
  arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  newarr = arr.reshape(2, 3, 2)
  
  print(newarr)
  
  >> [ [ [ 1  2]
         [ 3  4]
         [ 5  6] ]
  
       [ [ 7  8]
         [ 9 10]
         [11 12] ] ]
  # 最外面的维度具有 2 个数组，每个数组又包含 3 个数组，每个数组包含 2 个元素
  ```

  * 数组重塑方法需要原来的数组元素个数与重塑后的多维数组元素个数相等，否则将会产生错误

* **指定一个未知维度**

  ```python
  arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
  newarr = arr.reshape(2, 2, -1)
  
  print(newarr)
  
  >> [ [ [1 2]
         [3 4] ]
  
       [ [5 6]
         [7 8] ] ]
  # 最外层有2个维度，两个维度各自都有两个向量，每个向量的元素未指定
  ```

* **展平数组**

  ```python
  arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
  newarr = arr.reshape(-1)
  
  print(newarr)
  
  >> [ 1  2  3  4  5  6  7  8  9 10 11 12]
  ```

#### 2.4.3 NumPy数组高级操作

* **`rot90`**: `rot90(arr, k=1, axes=(0, 1))`: 将数组`arr`逆时针旋转90度，`k`表示旋转次数，默认为1，即旋转90度；`axes`表示选择哪些轴进行旋转，默认为旋转前两个轴，即表示矩阵的行和列。

  ```python
  arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  # 将数组逆时针旋转90度
  arr_rotated = np.rot90(arr)
  
  print("rotated array:\n", arr_rotated)
  
  >> [[3 6 9]
      [2 5 8]
      [1 4 7]]
  # 原始数组
  # [[1 2 3]
  #  [4 5 6]
  #  [7 8 9]]
  ```

* **`flip`**: `flip(arr, axis=None)`: 沿着指定轴翻转数组，`axis`表示要翻转的轴，可以是一个整数或一个元组。如果`axis`为None，则将数组沿着所有轴翻转。

  ```python
  arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  # 沿着第二个轴翻转数组,垂直方向第2个轴
  arr_flipped_axis = np.flip(arr, axis=1)
  print("flipped axis array:\n", arr_flipped_axis)
  
  >>  [ [3 2 1]
   	  [6 5 4]
  	  [9 8 7] ]
  # 原始数组
  # [ [1 2 3]
  #   [4 5 6]
  #   [7 8 9] ]
  ```

* **`flipud(arr)`**: 沿着垂直方向翻转数组。

  ```python
  arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  # 沿着垂直方向翻转数组
  arr_flipped_ud = np.flipud(arr)
  print("flipped ud array:\n", arr_flipped_ud)
  
  >> [ [7 8 9]
     	 [4 5 6]
       [1 2 3] ]
  # 原始数组
  # [ [1 2 3]
  #   [4 5 6]
  #   [7 8 9] ]
  ```

* **`fliplr(arr)`**: 沿着水平方向翻转数组。

  ```python
  arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  # 沿着水平方向翻转数组，翻转轴为垂直
  arr_flipped_lr = np.fliplr(arr)
  print("flipped lr array:\n", arr_flipped_lr)
  
  >> [ [3 2 1]
       [6 5 4]
       [9 8 7] ]
  # 原始数组
  # [ [1 2 3]
  #   [4 5 6]
  #   [7 8 9] ]
  ```

### 2.5 数组迭代

#### 2.5.1 `for`循环

* 对于一维数组的迭代，`for`循环遍历的是标量
* 对于二维数组的迭代，一个`for`循环遍历的是每行向量（对应的一维数组），要想遍历到标量则需要两个`for`循环
* 对于三位数组的迭代，一个`for`循环遍历每个**2-D**数组，两个`for`循环遍历到单个**1-D**数组（）向量，遍历到标量则需要3个`for`循环

#### 2.5.2 `nditer()`迭代

* 遍历一个**3-D**数组

  ```python
  arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  
  for x in np.nditer(arr): # 使用一个`for`循环 + np.nditer(ndarray)方法进行全部标量的迭代
    print(x)
  
  >> 1
  >> 2
  >> 3
  >> 4
  >> 5
  >> 6
  >> 7
  >> 8
  ```

* **迭代不同数据类型的数组**

  * 使用 `op_dtypes` 参数，并传递期望的数据类型，以在迭代时更改元素的数据类型

  * NumPy ==不会就地更改元素的数据类型（元素位于数组中）==，因此它需要一些其他空间来执行此操作，该额外空间称为 buffer，为了在 `nditer()` 中启用它，我们传参 `flags=['buffered']`

    ```python
    arr = np.array([1, 2, 3])
    
    for x in np.nditer(arr, flags=['buffered'], op_dtypes=['S']): # 以字符的类型遍历数组
      print(x)
    
    >> b'1'
    >> b'2'
    >> b'3'
    ```

* **以不同步长进行迭代**（过滤迭代）

  ```python
  arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]]) 
  
  for x in np.nditer(arr[:, ::2]): # 每遍历 2D 数组的一个标量元素，跳过 1 个元素
    print(x)
  
  >> 1
  >> 3
  >> 5
  >> 7
  ```

  <img src=".\.msc\pics\nditer_var_step.png" style="zoom: 67%;" />

* **`ndenumerate() `枚举迭代**

  * **1-D数组枚举**

    ```python
    arr = np.array([1, 2, 3])
    
    for idx, x in np.ndenumerate(arr):
      print(idx, x)
    
    >> (0,) 1
    >> (1,) 2
    >> (2,) 3
    ```

  * **2-D数组枚举**

    ```pytho
    arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
    
    for idx, x in np.ndenumerate(arr):
      print(idx, x)
    
    >> (0, 0) 1
    >> (0, 1) 2
    >> (0, 2) 3
    >> (0, 3) 4
    >> (1, 0) 5
    >> (1, 1) 6
    >> (1, 2) 7
    >> (1, 3) 8
    ```

    * 注意<i class = "fa fa-exclamation" aria-hidden="true"></i> ：
      * 枚举方法打印的索引是以元组的形式储存的
      * 如果不遍历索引`idx`，那么输出的是一整个元组，即**`((idx1, idx2), element)`**的形式（对于二维数组）



📘<<[Day 01](.\Python_Day01_Reg_Ex.md) | [Day 03](.\Python_Day03_Numpy_lib_Part2.md)]>> 

