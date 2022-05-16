// Adapted from https://fettblog.eu/jsx-syntactic-sugar/

/**
 * A helper function that ensures we won't work with null values
 */
function nonNull<V = {}, F = {}>(val: V, fallback: F) {
  return Boolean(val) ? val : fallback;
}

/**
 * How do we handle children. Children can either be:
 * 1. Calls to DOMcreateElement, returns a Node
 * 2. Text content, returns a Text
 *
 * Both can be appended to other nodes.
 */
function DOMparseChildren(children: Array<string | HTMLElement>) {
  return children.map((child) => {
    if (typeof child === 'string') {
      return document.createTextNode(child);
    }
    return child;
  });
}

/**
 * How do we handle regular nodes.
 * 1. We create an element
 * 2. We apply all properties from JSX to this DOM node
 * 3. If available, we append all children.
 */
function DOMparseNode<P = {}>(
  element: string,
  properties: P,
  children: Array<string | HTMLElement>
) {
  const el = document.createElement(element);
  Object.keys(nonNull(properties, {})).forEach((key) => {
    el[key] = properties[key];
  });
  DOMparseChildren(children).forEach((child) => {
    el.appendChild(child);
  });
  return el;
}

/**
 * Our entry function.
 * 1. Is the element a function, than it's a functional component.
 *    We call this function (pass props and children of course)
 *    and return the result. We expect a return value of type Node
 * 2. If the element is a string, we parse a regular node
 */
function DOMcreateElement<P = {}>(
  element: string | ((...args: any[]) => any),
  properties: P,
  ...children: Array<string | HTMLElement>
) {
  if (typeof element === 'function') {
    return element({
      ...nonNull(properties, {}),
      children,
    });
  }
  return DOMparseNode(element, properties, children);
}
