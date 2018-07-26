Survey.ly
=========

Demonstration of Survey.ly survey system:

- Surveys can have any number of questions, each of which can be:

  - Likert: a title, plus a choice of 7 radio buttons, labeled "No" to "Yes"
  - Multiple Choice: a title, plus a choice of an artibtrary number of choices

- Surveys have "respondent info" (optional), of a name and email address

- Surveys can be submitted only when all questions have been answered, otherwise error
  feedback should be given

- After submitting a form, the data is sent to a server (mocked out in this code),
  and the form is reset.

Live demo at https://joelburton.github.io/survey.ly/

Design
------

::

  +-----------------------------------------------------------------------------+
  | App   (sitewide-branding)                                                   |
  |                                                                             |
  |  +-----------------------------------------------------------------------+  |
  |  | Survey  (shows survey, gathers data, holds state)                     |  |
  |  |                                                                       |  |
  |  |  title of survey                                                      |  |
  |  |                                                                       |  |
  |  |  +-----------------------------------------------------------------+  |  |
  |  |  | RespondentInfo (optional personal info)                         |  |  |
  |  |  |                                                                 |  |  |
  |  |  |   name field                                                    |  |  |
  |  |  |   email field                                                   |  |  |
  |  |  +-----------------------------------------------------------------+  |  |
  |  |                                                                       |  |
  |  |  +-----------------------------------------------------------------+  |  |
  |  |  | Question  (generic question container, shows title/error)       |  |  |
  |  |  |                                                                 |  |  |
  |  |  |   title of question                                             |  |  |
  |  |  |   error, if any                                                 |  |  |
  |  |  |                                                                 |  |  |
  |  |  |  +-----------------------------------------------------------+  |  |  |
  |  |  |  | LikertQuestion *or* MultiChoiceQuestion                   |  |  |  |
  |  |  |  |                                                           |  |  |  |
  |  |  |  |   list of choices / array of likert buttons               |  |  |  |
  |  |  |  +-----------------------------------------------------------+  |  |  |
  |  |  +-----------------------------------------------------------------+  |  |
  |  |                                                                       |  |
  |  |  (there can be many Question components in a loop)                    |  |
  |  +-----------------------------------------------------------------------+  |
  +-----------------------------------------------------------------------------+
                    
