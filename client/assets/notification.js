function swymCallbackFn() {
    function MyNotification(props, getHandler) {
        var notifyJson = props.notification.notifyJson;
        return SwymUiCore.createSwymElement({
            elementName: "div",
            attributes: {
                id: "notification"
            },
            children: [SwymUiCore.createSwymElement({
                elementName: "h1",
                attributes: {
                    className: "notification-title"
                },
                children: ["fuck yeah"]
            }), SwymUiCore.createSwymElement({
                elementName: "h2",
                attributes: {
                    className: "product-title"
                },
                children: ["nooooope"]
            }), SwymUiCore.createSwymElement({
                elementName: "img",
                attributes: {
                    attrs: {
                        src: notifyJson.iu
                    }
                },
                children: null
            }), SwymUiCore.createSwymElement({
                elementName: "div",
                attributes: {
                    className: "price"
                },
                children: [notifyJson.cu + " " + notifyJson.pr]
            })]
        });
    }
    SwymUiCore.registerComponent("Notification", MyNotification);
}
if (!window.SwymCallbacks) {
    window.SwymCallbacks = [];
}
window.SwymCallbacks.push(swymCallbackFn);