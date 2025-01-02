// Event loop

// if the function is async like fileread or setinterval it will be pushed to the end of the call stack to make way for the easier task
// otherwise it would take a long time for a easy task to be run 

// Always set up your code to be async so that you will not hinder your other users, because it is not fair to let other people wait becuase one user desiced to 
// run a difficult task (blocking code something that takes a long ass time to finish)