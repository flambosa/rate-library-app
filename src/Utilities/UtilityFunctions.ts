export function equals<TItem extends Object>(item1 : TItem, item2: TItem) : boolean {
  
    function isNotDefined<TItem>(item : TItem) : boolean {
      return item === undefined || item === null;
    }
  
    if (isNotDefined(item1) || isNotDefined(item2)) {
      return false;
    }
  
    let item1Prop: keyof TItem;
  
    for (item1Prop in item1) {
      if (item1[item1Prop] !== item2[item1Prop]) {
        return false;
      }
    }
    
    return true;
  }

  export function reformatDate(dateString: string | undefined) : string {

    if (dateString === undefined || dateString === null || dateString === '') {
      return '';
    }

    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    }
    catch(e) {
      console.log(e);
      return dateString;
    }
  }