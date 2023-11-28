import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../../apis/post";

export default function FeedForm() {
  const queryClient = useQueryClient();
  const feedMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("feed");
    },
  });
  const [form, setForm] = useState({ title: "", imageUrl: "" });

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    feedMutation.mutate(form);

    setForm({ title: "", imageUrl: "" });
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <input type="text" name="title" value={form.title} onChange={onChange} />
      <button type="submit">제출</button>
    </form>
  );
}
