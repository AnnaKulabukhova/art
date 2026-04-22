import { classNamesType } from "./types"

export const cls = (...classes: Array<classNamesType>) => {
  const arrClasses: string[] = []

  classes.forEach((cls) => {
    if (!cls) {
      return
    }

    if (typeof cls === 'string') {
      arrClasses.push(cls)
    }

    if (Array.isArray(cls)) {
      arrClasses.push(...cls)
    }

    if (typeof cls === 'object' && cls !== null && !Array.isArray(cls)) {
      const a = Object.entries(cls)
        .filter((e) => e[1] === true)
        .map(([key]) => key)

      arrClasses.push(...a)
    }
  })

  return arrClasses.filter(el => el !== '').join(' ')
}