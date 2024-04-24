export const theme = {
"root": {
    "base": "relative"
  },
  "popup": {
    "root": {
      "base": "relative top-10 z-50 block",
      "inline": "relative top-0 z-auto",
      "inner": "inline-block rounded-lg bg-bg-100 p-4 shadow-lg"
    },
    "header": {
      "base": "p-2",
      "title": "px-2 py-3 text-center font-semibold text-gray-900",
      "selectors": {
        "base": "mb-2 flex justify-between",
        "button": {
          "base": "rounded-lg bg-bg-300 px-5 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white hover:bg-primary-200",
          "prev": "text-text-200",
          "next": "text-text-200",
          "view": "text-text-200"
        }
      }
    },
    "view": {
      "base": "p-1"
    },
    "footer": {
      "base": "mt-2 flex space-x-2",
      "button": {
        "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        "today": "bg-accent-200 text-white hover:bg-accent-300",
        "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
      }
    }
  },
  "views": {
    "days": {
      "header": {
        "base": "mb-1 grid grid-cols-7",
        "title": "h-6 text-center text-sm font-medium leading-6 text-text-100"
      },
      "items": {
        "base": "grid w-64 grid-cols-7 gap-2",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-md border-0 text-center text-sm font-semibold flex justify-center items-center leading-9 text-text-200 hover:bg-arena-green-200 ",
          "selected": "bg-accent-200 text-white hover:bg-accent-100",
        }
      }
    },
    "months": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 text-text-100 hover:bg-primary-200",
          "selected": "bg-primary-100 text-text-200 hover:bg-primary-200",
          "disabled": "text-gray-500"
        }
      }
    },
    "years": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 text-text-100",
          "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
          "disabled": "text-gray-500"
        }
      }
    },
    "decades": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 text-text-100",
          "selected": "bg-cyan-700 text-white hover:bg-cyan-600",
          "disabled": "text-gray-500"
        }
      }
    }
  }
}