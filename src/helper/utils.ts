export function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
  }

export function formatBrl(str: any){
    var str = str?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return str
}

export function fomatCategoryName(str: string){
  if(str === 'beers')
  return 'cervejas'
  if(str === 'soda')
  return 'refrigerantes'
  if(str === 'whiks')
  return "whisk's"
}

export function setColorCategory(str: string){
  if(str === 'orange')
  return 'bg-ibeer-900'
  if(str === 'red')
  return 'bg-red-500'
  if(str === 'black')
  return 'bg-gray-200'
}