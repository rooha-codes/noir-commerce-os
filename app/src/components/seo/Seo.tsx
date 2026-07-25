import { useEffect } from "react"

type SeoProps = {
  title: string
  description: string
  noIndex?: boolean
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  )

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute("name", name)
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

function updatePropertyMetaTag(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute("property", property)
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

export function Seo({
  title,
  description,
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    document.title = title

    updateMetaTag("description", description)
    updateMetaTag(
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow",
    )

    updatePropertyMetaTag("og:title", title)
    updatePropertyMetaTag("og:description", description)
    updatePropertyMetaTag("og:type", "website")
    updatePropertyMetaTag("og:site_name", "NOIR Commerce")
  }, [description, noIndex, title])

  return null
}