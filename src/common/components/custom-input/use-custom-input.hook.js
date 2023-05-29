export default function useCustomInput(onChange, regex, matchRegex) {
  const inputChangeHandler = (e) => {
    if (onChange) {
      onChange();
    }
    // e.preventDefault();
    // if (e.target.value.match(regex)) {

    // } else {
    //   let value = e.target.value.slice(0, -1);
    //   console.log(value, 'yes');
    //   e.target.value = value;
    // }
  };

  const inputKeyDownHandler = (e) => {
    // console.log(regex, e.target.value, e.target.value.match(regex), 'yes');
    // if (!e.target.value.match(regex)) {
    //   e.preventDefault();
    // }
    // write the code to match regex with e.target.value
  };

  return {
    inputChangeHandler,
    inputKeyDownHandler
  };
}
