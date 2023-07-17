import Image from "next/image";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/discord");
  const json = await data.json();
  console.log(json)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {json.data.map((message: any) => (
        <div key={message.id}>
          <p>{message.content}</p>
          {message.attachments?.map((attachment: any) => (
            <img key={attachment.id} src={attachment?.proxy_url} width={200} height={200} />
          ))}
        </div>
      ))}
    </main>
  );
}
