import React, { Fragment } from 'react';
import { Button, Checkbox, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { IProps } from './index.d';
import styles from '../index.less';

const TodoItem: React.FC<IProps> = (props: IProps) => {
    const { bear, handleItemDelete } = props;
    return (
        // Fragment 占位符，可用于替代div，使其html结构不会出现外层div
        <Fragment>
            <h2 className={styles.headline}>
                正在进行
                <span>{bear.length}</span>
            </h2>
            <ol className={styles.demo_box}>
                {bear.map((item: any, index: any) => {
                    return (
                        <li key={index}>
                            <Checkbox></Checkbox>
                            <Input value={item} />
                            <Button onClick={() => handleItemDelete(index)} type="primary" shape="circle" icon={<DeleteOutlined />} />
                        </li>
                    );
                })}
            </ol>
        </Fragment>
    );
};

export default TodoItem;
