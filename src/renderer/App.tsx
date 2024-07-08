import { JSONFilePreset } from 'lowdb/node';
import { useState, ChangeEvent, useEffect } from 'react';
import './App.css';
import { Client } from './types';
import ClientLIst from './ClientList';
import ClientData from './ClientData';
import AddClient from './AddClient';

export default function App() {
  const [clients, setClients] = useState<Client[]>([
    { name: 'Sam', phone: '0672399004' },
    { name: 'John', phone: '123413512' },
    { name: 'Sindy', phone: '124124134' },
  ]);

  const [filteredClients, setFilteredClients] = useState<Client[]>(clients);

  const [client, setClient] = useState<Client | undefined>(undefined);

  const [isAddClient, setIsAddClient] = useState(false);

  // useEffect(() => {
  //   async function readDb() {
  //     const defaultData = {
  //       clients: [
  //         { name: 'Sam', phone: '0672399004' },
  //         { name: 'John', phone: '123413512' },
  //         { name: 'Sindy', phone: '124124134' },
  //       ],
  //     };
  //     const db = await JSONFilePreset<{ clients: Client[] }>(
  //       'db.json',
  //       defaultData,
  //     );
  //     const storedClients = db.data.clients;
  //     console.log('GET DATA');
  //     setClients(storedClients);
  //     setFilteredClients(storedClients);
  //   }

  //   readDb();
  // }, []);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const searchInput = e.target.value;
    if (e.target.value?.length > 3) {
      setFilteredClients(clients.filter((c) => c.phone.includes(searchInput)));
    } else {
      setFilteredClients(clients);
    }
  }

  function handleAddClientBtn() {
    setClient(undefined);
    setIsAddClient(true);
  }

  function createClient(newClient: Client) {
    setIsAddClient(false);
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);
    setFilteredClients(updatedClients);
    setClient(newClient);
  }

  return (
    <div className="app">
      {isAddClient && (
        <AddClient
          addClient={(c: Client) => createClient(c)}
          onCancel={() => setIsAddClient(false)}
        />
      )}
      {client !== undefined && (
        <ClientData
          client={client}
          updateClient={() => console.log('updated')}
          setClient={setClient}
        />
      )}
      {!isAddClient && client === undefined && (
        <div>
          <button type="button" onClick={handleAddClientBtn}>
            Додати клієнта
          </button>
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder="номер телефону"
          />

          <ClientLIst clients={filteredClients} setClient={setClient} />
        </div>
      )}
    </div>
  );
}
