export const listaTheme = {
    "root": {
      "base": "w-full text-left text-sm rounded-lg",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-2 py-2 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase",
      "cell": {
        "base": "bg-gray-200 px-1 md:px-4 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50",
      "striped": "odd:bg-white even:bg-gray-50"
    }
  }