import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './index.less';
import TodoItem from './TodoItem';

// const Xxxx: React.FC<IProps> = ()=>{}
const TodoList: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>();
    const [bear, setBear] = useState<string[]>([]);
    const [finish, setFinish] = useState<string[]>([]);

    const onPressEnter = (e: any) => {
        // 将input的e.target.value跟bear原数组合并，形成一个新数组
        setBear([...bear, e.target.value]);
        setInputValue('');
    };

    const inputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleItemDelete = (index: any) => {
        // 不要直接操作state数据
        const list = [...bear];
        list.splice(index, 1);
        setBear(list);
    };

    return (
        <div className={styles.todo}>
            <header className={styles.header}>
                <span className={styles.text}>ToDoList</span>
                <Input
                    value={inputValue}
                    maxLength={10}
                    onPressEnter={onPressEnter}
                    onChange={inputChange}
                    className={styles.input}
                    placeholder="请添加ToDO"
                />
            </header>
            {/* section 用来定义一个明确的主题，通常含有一个标题(h1-h6)。但如果是文章,通常会使用article标签来代替 */}
            <section className={styles.content}>
                <TodoItem bear={bear} handleItemDelete={handleItemDelete} />
            </section>
        </div>
    );
};

export default TodoList;
