export default ({types: t}) => {
  const hasDirective = (path, directive) => {
    !!path.findParent(({ node }) => {
      node.directives && node.directives.some(({ value }) => {
        value.value == directive
      })
    })
  }

  return {
    visitor: {
      BinaryExpression(path) {
        if (!path.isBinaryExpression({ operator: "<<" })) return
        if (hasDirective(path, "no fn-call")) return

        let args = t.isSequenceExpression(path.node.right) ? path.node.right.expressions : [path.node.right];

        path.replaceWith(t.callExpression(path.node.left, args))

        return
      }
    }
  }
}
