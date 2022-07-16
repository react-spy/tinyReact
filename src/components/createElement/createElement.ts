/**
 * 创建元素
 * @author spy
 */
import * as CSS from 'csstype';

export type CreateElementProps = {
    // 第一个参数是必填，传入的是似HTML标签名称，eg: ul, div
    type: string | Function;
    // 第二个参数是可选，传入的是似HTML标签的属性，eg: class, id, style, onclick, onmouseover, ...
    props?: {
        //Html属性
        style?: CSS.Properties;
        className?: string;
        id?: string | number;
        ref?: any;
        //事件
        onClick?: (e: any) => void;
        // 其他属性
        [key: string]: any;
    } | null;
    // 第三个参数是可选，传入的是似HTML标签的子元素，eg: <ul><li>1</li><li>2</li></ul>
    children?: any;
};

export const createElement = ({
    type,
    props,
    ...children
}: CreateElementProps) => {
    if (typeof type === 'string') {
        const element: any = document.createElement(type);
        if (props) {
            Object.keys(props).forEach(key => {
                if (key === 'style') {
                    const styles: any = props[key];
                    Object.keys(styles).forEach((styleKey: any) => {
                        element.style[styleKey] = styles[styleKey];
                    });
                } else if (key === 'className') {
                    element.className = props.className;
                } else if (key === 'id') {
                    element.id = props.id;
                } else if (key === 'ref') {
                    props.ref(element);
                } else if (key === 'onClick') {
                    element.onclick = props.onClick;
                } else {
                    element.setAttribute(key, props[key]);
                }
            });
        }
        // if (children) {
        //     children.forEach(child => {
        //         element.appendChild(child);
        //     );
        // }
        return {
            type:"1",
            props: {
                
            },
            children: []
        };

    }
    return {
        type: "2",
        props: {
            "aa":1
        }
    };
};