import ClientRow from './ClientRow';
import { Client } from './types';

export default function ClientLIst(props: {
  clients: Client[];
  setClient: Function;
}) {
  const { clients, setClient } = props;
  return (
    <div className="client-list">
      <ul>
        {clients.map((client) => (
          <ClientRow client={client} setClient={setClient} />
        ))}
      </ul>
    </div>
  );
}
