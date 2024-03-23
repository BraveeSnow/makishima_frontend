type ButtonProps = {
  children: string;
  url?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <>
      <a className="button" href={props.url} target={props.url && "_blank"}>
        {props.children}
      </a>
    </>
  );
}
