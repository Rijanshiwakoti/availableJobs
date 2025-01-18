import { useState } from "react";
import { useEffect } from "react";
import JObs from "./JObs";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [companyJobs,setCompanyJobs] = useState(null)
  const fetchData = async()=>{
    try {
      const data = await fetch(url);
      const response = await data.json();
      if(!data.ok)
        {throw new error("Url does not exists");
        }
      setCompanyJobs(response);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{

    fetchData()
  }
  ,[])
  if(isLoading){
    return <div className="loading"></div>
  }
  return <div>
    <JObs companyJobs={companyJobs}/>
  </div>;
};
export default App;
