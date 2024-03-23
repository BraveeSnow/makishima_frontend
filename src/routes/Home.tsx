import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main>
        <h1>Makishima</h1>
        <h2>
          The <i className="primary">Intelligent</i> Discord Bot
        </h2>

        <br />

        <Button url="https://discord.com/oauth2/authorize?client_id=1215837173811642438">
          Invite to Server
        </Button>
        <Button url="https://github.com/BraveeSnow/makishima">
          Source Code
        </Button>
      </main>
    </>
  );
}
