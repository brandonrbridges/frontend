const createPortalWrapper = (portalId: string) => {
  const element = document.createElement('div')
  element.setAttribute('id', portalId)

  document.body.appendChild(element)

  return element
}

export default createPortalWrapper
