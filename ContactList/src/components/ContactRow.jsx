

export default function ContactRow({contact, onClick}){
  const handleClick = () => {
    onClick(contact.id);
  };

    return (
        <tr
        onClick={handleClick}
        >
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      );
}