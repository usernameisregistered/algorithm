## 第二章 算法与复杂性

### 算法定义
>  为了解决一个适当的公式化表示的问题而必须执行的一系列指令

### 梵塔问题
问题：已知有三根针分别用1,2,3表示,在一号针中从小放n个盘子,现要求把所有的盘子从1针全部移到3针,移动规则是:使用2针作为过度针,每次只移动一块盘子,且每根针上不能出现大盘压小盘.找出移动次数最小的方案
输入：一个整数
输出：解决n-圆盘梵塔问题的搬动顺序
伪代码：
sort = [];
hanoitowers(n,formpeg,toPeg)
    if n === 1
        sort <- "[formpeg,toPeg]"
    else 
        unusedPeg <-  6 - formpeg - toPeg; // 6 为3个柱子的索引和
        hanoitowers(n-1,formpeg,unusedPeg)
        sort <- "[formpeg,unusedPeg]"
        hanoitowers(n-1,unusedPeg,toPeg)
        sort <- "[unusedPeg,toPeg]"
    
[代码](../../code/生物信息学算法导论/第二章 算法和复杂度/hanoitowers.js)

### 排序问题
问题： 排列一组整数
输入：n个不同的整数序列
输出：整数排序
伪代码：
selectionSort(arr,n)
    for i <- 1 to n - 1
        for key <- i + 1 to n
            if arr[key] < arr[i]
                arr[key] <-> arr[i]

[代码](../../code/生物信息学算法导论/第二章 算法和复杂度/selectionSort.js)

## 大**O**记号
> 计算机科学家简明的使用大**O**记号来描述一个算法的运行时间，如果说一个算法的运行时间是二次的,记为**O**(n<sup>2</sup>)

> 当我们∮(n) = **O**(n<sup>2</sup>)告诉我们∮(n)的增长不会快于其他的二次函数，但是并没有告诉我们比任何一个二次函数增长的慢。

## 算法设计技术
### 穷举搜索
### 分支定界法
### 贪婪算法
### 动态规划
### 分治法
### 机器学习
### 随机化算法
