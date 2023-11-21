type ButtonPropsType = {
  callBack: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    // НУЖНО ДОПИСАТЬ
    props.callBack();
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};







// type ButtonPropsType = {
//   callBack: any // НУЖНО ПРОТИПИЗИРОВАТЬ
//   name: any // НУЖНО ПРОТИПИЗИРОВАТЬ
// };
//
// export const Button = (props: ButtonPropsType) => {
//   const callBackHandler = () => {
//     // НУЖНО ДОПИСАТЬ
//   };
//
//   return (
//       <button id={'hw04-button'} onClick={callBackHandler}>
//         {props.name}
//       </button>
//   );
// };