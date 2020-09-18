function createElementWithAttributes(tagName: string, attributes: object = { }, context: Element = null): HTMLElement {
    const element = document.createElement(tagName);
    Object.keys(attributes).forEach(key => {
        element[key] = attributes[key];
    });
    if (context) {
        context.append(element);
    }
    return element;
}

export { createElementWithAttributes as $ };