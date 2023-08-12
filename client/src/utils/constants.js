import DOGS_BREEDS_LIST from '../../DOGS_BREEDS_LIST.json';

export const DOG_BEHAVE_OPTIONS = [
    'Adventurous',
    'Aggressive',
    'Avoid strangers',
    'Energized',
    'Friendly',
    'Good with other dogs',
    'Love strangers',
    'Loves kids',
    'Relaxed',
    'Scared',
    'Smart',
    'Stubborn',
    'Warm',
];

export const DOG_GENDERS = {
    M: { style: { color: 'blue' } },
    F: { style: { color: 'red' } },
};
export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DEFAULT_INPUTS_HELPER_TEXT = {
    race: 'Select race or Write down',
    behave: 'Select behavior types or Write them down',
    age: 'Enter age between 0-20',
    gender: 'Choose M or F',
    name: "Enter dog's name",
};

export const DOG_CREATION_MAX_BEHAVE_TYPES = 4;
