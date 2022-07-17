/**
 * 创建元素
 * @author spy
 */

// const virtualDom = (
//     <div className="container">
//         <h1>我是标题</h1>
//         <p>我是内容</p>
//         {
//             1 > 2 && "我是span1"
//         }
//         {
//             console.log(1)
//         }
//         {
//             2 > 1
//         }
//         {
//             1 < 2 && "我是span2"
//         }
//     </div>
// );

export const createElement = (type, props, ...children) => {
    /**
     * 处理children
     * 目的：
     * 1、剔除undefined、null、true、false
     * 2、将字符串转换为对象展示
     */
    const chidrenElements = [...children].reduce((prev, child) => {
        if (child !== null & child !== true && child !== false && child !== undefined) {
            if (child instanceof Object) {
                // 如果是对象
                prev.push(child);
            } else {
                // 其他就是字符串，为其改造为对象
                prev.push(createElement("text", { textContent: child }));
            }
        }
        return prev;
    }, []);
    return {
        type,
        props: { ...props, children: chidrenElements },
        children: chidrenElements,
    };
};