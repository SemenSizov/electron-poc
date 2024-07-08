import { Client } from './types';

export default function ClientRow(props: {
  client: Client;
  setClient: Function;
}) {
  const { client, setClient } = props;
  const { name, phone } = client;
  return (
    <li key={phone}>
      <div>
        <span className="client-name">{name}</span>
        <span className="client-phone">{phone}</span>
        <button
          className="btn-select-client"
          type="button"
          onClick={() => setClient(client)}
        >
          Обрати
        </button>
      </div>
    </li>
  );
}
