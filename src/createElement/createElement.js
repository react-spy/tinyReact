/**
 * 创建元素
 * @author spy
 */

export const createElement = ({
    type,
    props,
    ...children
}) => {
    if (typeof type === 'string') {
        const element = document.createElement(type);
        if (props) {
            Object.keys(props).forEach(key => {
                if (key === 'style') {
                    const styles = props[key];
                    Object.keys(styles).forEach((styleKey) => {
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