declare global {const TEST: boolean}

const getDayJS = () => {
  try {
    return <typeof import('dayjs')>require('dayjs')
  }
  catch {
    return undefined;
  }
}

if(TEST) {
  try {
    console.log('TEST')
  } catch (e) {
    if (TEST) throw e
    console.log(getDayJS())
  }
} else console.log(getDayJS())

export {}
