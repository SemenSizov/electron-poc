import { Client } from './types';

export default function ClientData(props: {
  client: Client;
  updateClient: Function;
  setClient: Function;
}) {
  const { client, updateClient, setClient } = props;

  function hanldeSaveBtnClick() {
    updateClient();
  }

  function hanldeCloseBtnClick() {
    setClient(undefined);
  }

  return (
    <div className="client-data">
      <div className="general-info">
        <div>
          <span>Ім&apos;я</span>
          <span>{client.name}</span>
        </div>
        <div>
          <span>Номер Телефону</span>
          <span>{client.phone}</span>
        </div>
      </div>
      <button type="button" onClick={hanldeSaveBtnClick}>
        Зберегти
      </button>
      <button type="button" onClick={hanldeCloseBtnClick}>
        Закрити
      </button>
    </div>
  );
}
