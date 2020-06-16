// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: "Welcome to the experiment on form comparison!",
  text: `Dear participant,
            <br />
            <br />
            thank you for the decision to devote your time to passing this short test. 
            <br />
            In the following experiment you will be asked to compare 2 shapes simultaneously presented on the picture.
            <br />
            Please, start experiment when you are in the state to which you could refer as "normal"
            <br /> 
            (not too tired, not too sleepy, not extremely hungry, etc)
            <br />
            <br />
            Good luck!`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In the following trials you will be presented with images, depicturing 2 shapes at the time.
          <br /> 
         Your task would be to determine whether these shapes are same or different and press respective keys to announce it.
         <br />
         J - "same"
         <br />
         F - "different"
         <br />
         <br />
         Please, try to fixate your gaze at the white dot in the middle of the picture all the time.
            <br />
            <br />
            Let´s get started!`,
  buttonText: 'Start Practice'
});


// For most tasks, you need instructions views
const begin_main_trials = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin_main_trials',
  title: 'General Instructions',
  text: `In the following trials you will be presented with images, depicturing 2 shapes at the time.
          <br /> 
         Your task would be to determine whether these shapes are same or different and press respective keys to announce it.
         <br />
         J - "same"
         <br />
         F - "different"
         <br />
         <br />
         Please, try to fixate your gaze at the white dot in the middle of the picture all the time.
            <br />
            <br />
            Let´s get started!`,
  buttonText: 'Start Experiment'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze the results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment! Take care and have a great time!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/



const key_press_practice = custom_views.key_press({

  trials: practice_trials.key_press.length,

  trial_type: "practice",
  
  name: 'key_press_practice',

  question: "",

  key1: "f",
  key2: "j",
  f: "same",
  j: "different",
  
  timeout_message: "Please hurry up!",

  data: _.shuffle(practice_trials.key_press),

  pause: 250,
});

const key_press_main = custom_views.key_press({

  trials: main_trials.key_press.length,

  trial_type: "main",
  
  name: 'key_press_main',

  question: "",

  key1: "f",
  key2: "j",
  f: "same",
  j: "different",
  
  timeout_message: "Please hurry up!",

  data: _.shuffle(main_trials.key_press),

  pause: 250,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
