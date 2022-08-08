
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";
import About from './pages/About';

function App() {

    return (
        <FeedbackProvider>
          <Router>
              <Header  />
              <div className="container">
                  <Routes>
                     <Route exact path='/'
                            element={
                         <>
                             <FeedbackForm />
                             <FeedbackStats />
                             <FeedbackList />
                         </>
                     }>

                    </Route>
                    <Route path='/about' element={<About />} />
                  </Routes>
                  <AboutIconLink />
              </div>
          </Router>
        </FeedbackProvider>
    )
}


export default App

//const title = 'this is my blog post';
//     const body = 'My post is quite interesting';
//     const comments = [
//         {id: 1, text:"This is my first comment"},
//         {id: 2,  text: "This is my second comment"},
//         {id: 3, text: "This is my third comment"}
//     ]
//     const loading = false;
//     if (loading) return <h2>Loading...</h2>
//     const showComments = true;
//     const resentComments = (
//         <ul>
//             {comments.map((comment)=>
//                 <li key={comments.id}>{comment.text}</li>
//             )}
//         </ul>
//     )

//h3>New component is ready {title}</h3>
//             <p>How nice it is {body}</p>
//             <p>Comment ({comments.length})</p>
//             {showComments && resentComments}