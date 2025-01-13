/**
 * 动态数组实现
 */
class DynamicArray{

    /**
     * 初始化一个动态数组
     * @param {Number} initSize 动态数组的默认大小默认值为1
     */
    constructor(initSize = 1){
        this.data = new Array(initSize);
        this.size = 0;
        this.init_cap = initSize;
    }

    /**
     * 给数组末尾增加元素
     * @param {*} item 
     */
    push(item){
        const size = this.data.length;
        if(this.size === size){
            this.resize(2 * this.init_cap)
        }
        this.data[size] = item;
        this.size++;
    }

    /**
     * 从数组的尾部删除元素
     * @returns {*}
     */
    pop(){
        if(this.size === 0){
            return void 0;
        }
        const size = this.data.length;
        if(this.size === Math.floor(size / 4)){
            this.resize(Math.floor(size / 2));
        }
        const popVal = this.data[this.size - 1];
        this.data[this.size - 1] = null;
        this.size--;
        return popVal;
    }

    /**
     * 给数组插入元素
     * @param {Number} index 要插入的下表
     * @param {*} item 要插入的元素
     */
    insert(index, item){
        this.checkPositionIndex(index);
        const size = this.data.length;
        if(this.size === size){
            this.resize(2 * this.init_cap)
        }
        for(let i = this.size - 1; i >=index ; i--){
            this.data[i+1] = this.data[i]
        }
        this.data[index] = item
        this.size++;
    }

    /**
     * 删除数组的指定下标元素
     * @param {Number} index 
     * @returns {*}
     */
    remove(index){
        this.checkElementIndex(index);
        const size = this.data.length;
        if(this.size === size){
            this.resize(2 * this.init_cap)
        }
        const popVal = this.data[index];
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.data[this.size-1] = null
        this.size--;
        return popVal;
    }

    /**
     * 给数组的头部插入元素
     * @param {*} item 
     */
    unshift(item){
        this.insert(0, item)
    }

    /**
     * 删除数组的第一个元素
     */
    shift(){
        this.remove(0)
    }

    /**
     * 判断动态数组是不是空数组
     * @returns {Boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * 动态修改数组的个数
     * @param {Number} size 
     */
    resize(size){
        const temp = new Array(size);
        for (let i = 0; i < this.size; i++) {
            temp[i] = this.data[i];
        }
        this.data = temp;
    }
    /**
     * 判断下表元素是否存在
     * @param {Number} index 
     */
    checkElementIndex(index) {
        if (!this.isValidIndex(index)) {
            throw new Error("Index: " + index + ", Size: " + this.size);
        }
    }

    /**
     * 判断制定下表元素是否可以添加元素
     * @param {Number} index 
     */
    checkPositionIndex(index) {
        if (!this.isValidIndex(index)) {
            throw new Error("Index: " + index + ", Size: " + this.size);
        }
    }

    isValidIndex(index) {
        return index >= 0 && index < this.size;
    }
}