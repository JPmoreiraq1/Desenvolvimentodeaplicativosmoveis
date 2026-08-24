import { FlatList } from "react-native-web";
import ItemContato from "../components/ItemContato";

const CONTATOS = [
  {
    id: 1,
    nome: "Helton Azevedo",
    cargo: "DIretor PHD de tecnologia",
    icone: "user",
  },
  {
    id: 2,
    nome: "Maria Eduarda",
    cargo: "Diretora de pesquisas especiais avançadas",
    icone: "smartphone",
  },
  {
    id: 3,
    nome: "João vitor",
    cargo: "Dono do Sicobe",
    icone: "server",
  },
  {
    id: 4,
    nome: "Thiago Detoni",
    cargo: "Fazendeiro",
    icone: "briefcase",
  },
];

export default function Home2() {
  return (
    <FlatList
      data={CONTATOS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemContato contato={item} />}
    />
  );
}