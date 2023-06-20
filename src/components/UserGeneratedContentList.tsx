import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import "./UserGeneratedContentList.css";

interface Submission {
  id: string;
  hotel: string;
  userName: string;
  date: string;
  description: string;
}

const UserGeneratedContentList: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: "1",
      hotel: "Westin Hotels & Resorts",
      userName: "John",
      date: "2023-06-18",
      description:
        "Hello everyone My family and I had dine-in at the restaurant last Saturday because it was my parents marriage anniversary (Jan 28). The food was awesome especially Boss sandwich. The only thing I would recommend is that the plates were small so maybe next time, please give us bigger plates so than more food can be covered. Other than that, my family and I enjoyed everything and we hope to come back again!",
    },
    {
      id: "2",
      hotel: "My Holiday",
      userName: "Jane",
      date: "2023-06-19",
      description:
        "Its near to home walking distance😎😎Paav Bhaji was amazingg very nice taste..Manchurian was delicious .. Veg Grill Cheese sandwich We missed cheese...Nevertheless Everything is very good delicious pure Gujarati Taste.. Love it ❤️❤️❤️ thanks for bringing the taste",
    },
  ]);

  const handleSubmission = (
    hotel: string,
    userName: string,
    description: string
  ) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Format the date as a string

    const newSubmission: Submission = {
      id: Date.now().toString(),
      hotel,
      userName,
      date: formattedDate,
      description,
    };
    setSubmissions([...submissions, newSubmission]);
  };

  const formatSubmissionDate = (date: string): string => {
    const currentDate = new Date();
    const submissionDate = new Date(date);
    const distance = formatDistanceToNow(submissionDate, { addSuffix: true });
    return distance;
  };

  return (
    <div className="container">
      {submissions.map((submission) => (
        <div key={submission.id}>
          <h2>{submission.hotel}</h2>
          <p>{submission.userName}</p>
          <p>Date: {formatSubmissionDate(submission.date)}</p>
          <p>{submission.description}</p>
          <hr />
        </div>
      ))}
      <UserSubmissionForm onSubmission={handleSubmission} />
    </div>
  );
};

interface UserSubmissionFormProps {
  onSubmission: (hotel: string, userName: string, description: string) => void;
}

const UserSubmissionForm: React.FC<UserSubmissionFormProps> = ({
  onSubmission,
}) => {
  const [hotel, setHotel] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmission(hotel, userName, description);
    setHotel("");
    setUserName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Your Content</h3>
      <div>
        <label htmlFor="hotel">Hotel:</label>
        <input
          type="text"
          id="hotel"
          value={hotel}
          onChange={(event) => setHotel(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserGeneratedContentList;
