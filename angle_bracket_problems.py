def angle_bracket_problem(str):
  '''
    You only add the number of open leading brackets and closing outer brackets
  '''
  open_count = 0
  close_count = 0
  for i in list(str):
    if i == '>':
      if(open_count == 0):
        open_count += 1
      else:
        close_count -= 1
    else:
      close_count += 1

  solution_str = '<' * open_count + str + '>' * close_count

  print('Solution =>', solution_str)
  return solution_str



angle_bracket_problem('<<<<<<<<<')