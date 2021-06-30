class Utility {
  // retrieve user input values
  // adding static allows to use the function without needing to instantiate Utility class every time
  static getInputValue(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>(
      document.getElementById(elementID)
    );
    return inputElement.value;
  }
}
