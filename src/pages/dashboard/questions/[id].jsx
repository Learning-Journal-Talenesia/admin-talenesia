import { useState, useEffect } from "react";
import { updateData, fetchQuestionById } from "@/services/api"; // Update with the correct path to your api.js file
import { useRouter } from "next/router";
import Link from "next/link";

const EditQuestionPage = () => {
  const [questionFields, setQuestionFields] = useState([{ question: "" }]);
  const [selectedType, setSelectedType] = useState("");
  const [idTema, setIdTema] = useState("");
  const [tema, setTema] = useState("");

  const { push } = useRouter();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const questionData = await fetchQuestionById(id);
        const { idThema, thema, question, inputType } = questionData;

        setIdTema(idThema);
        setTema(thema);
        setSelectedType(inputType);
        setQuestionFields(question.map((q) => ({ question: q })));
      } catch (error) {
        console.error("Error fetching question data:", error);
      }
    };

    fetchQuestionData();
  }, [id]);

  const handleAddQuestion = () => {
    setQuestionFields([...questionFields, { question: "" }]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questionFields];
    updatedQuestions.splice(index, 1);
    setQuestionFields(updatedQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questionFields];
    updatedQuestions[index].question = value;
    setQuestionFields(updatedQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!idTema || !tema || selectedType === "") {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      idThema: idTema,
      thema: tema,
      question: questionFields.map((field) => field.question),
      inputType: selectedType.toLowerCase(),
    };

    try {
      await updateData(id, formData);
      push("/dashboard/questions");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen">
      <h1 className="text-3xl mb-8">Edit pertanyaan</h1>
      <div className="w-3/5 shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label htmlFor="idTema">ID Tema</label>
            <input
              type="text"
              id="idTema"
              name="idTema"
              value={idTema}
              placeholder="ID Tema"
              className="p-3 bg-slate-200 rounded"
              readOnly
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="tema">Tema</label>
            <input
              type="text"
              id="tema"
              name="tema"
              value={tema}
              placeholder="Tema"
              className="p-3 bg-slate-200 rounded"
              readOnly
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="type">Tipe</label>
            <input
              type="text"
              id="type"
              name="type"
              value={selectedType}
              className="p-3 bg-slate-200 rounded"
              readOnly
            />
          </div>
          {questionFields.map((field, index) => (
            <div className="flex flex-col my-2" key={index}>
              <label htmlFor={`question-${index}`}>
                Pertanyaan {selectedType === "checkbox" ? index + 1 : ""}
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id={`question-${index}`}
                  name={`question-${index}`}
                  placeholder="pertanyaan"
                  value={field.question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="p-3 bg-slate-200 rounded w-full mr-1"
                />
                {index !== 0 && selectedType === "checkbox" && (
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(index)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
                  >
                    -
                  </button>
                )}
              </div>
              {index === questionFields.length - 1 &&
                selectedType === "checkbox" && (
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 focus:outline-none"
                  >
                    +
                  </button>
                )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-slate-800 text-white w-full rounded p-3 mt-4"
          >
            Update
          </button>
        </form>
        <Link
          className="text-blue-600 underline block mt-4"
          href="/dashboard/questions"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default EditQuestionPage;
