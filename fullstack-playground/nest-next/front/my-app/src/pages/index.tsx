import { useRouter } from "next/router";
import { FormEvent, use, useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    console.log(data);

    setUserData(data);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await res.json();
    setName("");
    setMessage(`${data.id} was created`);

    await getData();
  }

  return (
    <main>
      <section>
        <div className="p-10 flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-center">Create user form</h1>
            <form onSubmit={onSubmit}>
              <div className="form-control">
                <label>Name:</label>
                <input
                  name="name"
                  value={name}
                  className="border rounded"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-control">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="text-center min-h-8">{message}</div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center max-w-6xl mx-auto">
          {userData.map((user: any, index) => (
            <div key={user.id} className="flex">
              <p className="grow basis-0">{user.id}</p>
              <p className="grow basis-0">{user.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
