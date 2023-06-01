import { A } from "solid-start";

export default function Register() {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registration successful");
        form.reset();
      })
      .catch((error) => {
        alert("Registration failed");
        console.error(error);
      });
  };

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        注册
      </h1>
      <form class="max-w-md mx-auto" onsubmit={handleSubmit}>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            用户名
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            电子邮件
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            密码
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 font-bold mb-2"
            for="confirmPassword"
          >
            确认密码
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            注册
          </button>
          <A
            href="/"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            取消
          </A>
        </div>
      </form>
    </main>
  );
}