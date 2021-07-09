#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
wrong=false
success=false

read -p 'which problem? ' problem
testCaseBaseRoute="$problem/data/secret"
solution="$problem/solution/app.js"

numberOfTestCases=$(expr $(ls $testCaseBaseRoute | wc -l) / 2)

for ((i = 1; i <= $numberOfTestCases; i++)); do

  echo $(node $solution <$testCaseBaseRoute/$i.in >out)
  echo $(diff out $testCaseBaseRoute/$i.ans >res)

  if [ -s res ]; then
    printf "${RED}$i.in"
    wrong=true
  else
    printf "${GREEN}$i.in"
    success=true
  fi

done

if [[ $wrong = true ]]; then
  printf "\n\n${RED}WRONG ANSWER\n"
elif [[ $success = true && $wrong = false ]]; then
  printf "\n\n${GREEN}SUCCESS\n"
else
  printf "\n\n${RED}Error\n"
fi
