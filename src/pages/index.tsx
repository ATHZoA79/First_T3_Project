import { type NextPage } from "next";
import { useState } from "react";

interface FormData {
  title: string;
  content: string;
  id: string;
}

const Home: NextPage = () => {
  const [form, setForm] = useState<FormData>({
    title: "",
    content: "",
    id: "",
  });

  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">Notes</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex-col mx-auto flex w-auto min-w-[25%] max-w-min items-stretch space-y-6"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="bborder-gray-600 rounded border-2 p-1"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="bborder-gray-600 rounded border-2 p-1"
        />
        <button type="submit" className="rounded bg-blue-500 p-1 text-white hover:bg-sky-600">
          Add +
        </button>
      </form>
    </>
  );
};

export default Home;
