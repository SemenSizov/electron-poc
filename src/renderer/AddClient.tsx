import { ChangeEvent, useState } from 'react';

export default function AddClient(props: {
  addClient: Function;
  onCancel: Function;
}) {
  const { addClient, onCancel } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSaveBtnClick() {
    let error = '';
    let hasValidationError = false;
    if (name.length < 3) {
      hasValidationError = true;
      error = 'Введіть ім&apos;я клієнта (3 символи мінімум)';
    }
    // if (
    //   !phone.match(
    //     /^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    //   )
    // ) {
    //   hasValidationError = true;
    //   error = 'Введіть корректний номер телефону клієнта';
    // }
    if (!hasValidationError) {
      addClient({ name, phone });
    } else {
      setIsError(hasValidationError);
      setErrorMessage(error);
    }
  }

  function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handlePhoneInput(e: ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
  }

  function handleCancelClick() {
    onCancel();
  }

  return (
    <div className="add-client">
      <div>
        <span>Ім&apos;я</span>
        <input onChange={handleNameInput} placeholder="Введіть ім'я" />
      </div>
      <div>
        <span>Номер Телефону</span>
        <input
          onChange={handlePhoneInput}
          placeholder="Введіть номер телефону"
        />
      </div>
      <button type="button" onClick={handleSaveBtnClick}>
        Зберегти
      </button>
      <button type="button" onClick={handleCancelClick}>
        Відміна
      </button>
      {isError && <div className="alert">{errorMessage}</div>}
    </div>
  );
}
