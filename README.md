<p align="center">
  <img src="https://i.imgur.com/ogbfW3k.png">
</p>

# AirBnB clone - The console
The console is the first segment of the AirBnB project at Holberton School, which will collectively cover fundamental concepts of higher-level programming. The goal of the AirBnB project is to eventually deploy our server with a simple copy of the AirBnB Website(HBnB).
* The AirBnb clone project consists of 6 parts:

| Component 	| Description 	|
|:--------------------------:	|:------------------------------------------------------------:	|
| Console 	| Data model management via command interpreter 	|
| Web static 	| HTML/CSS/Templates 	|
| MySQL storage 	| Importing local file storage to database 	|
| Web framework - templating 	| Web server deployment in Python 	|
| RESTful API 	| JSON web interface to display all objects 	|
| Web dynamic 	| Loading of objects from client side using Jquery/RESTful API 	|

* A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.
---
Example of final product:
<p align="center">
  <img src="https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/268/8-index.png">
</p>

## Learning objectives

### Serialization / Deserialization Flow

In our project, these processes are handled by the ``FileStorage`` class,\
which is responsible for converting instances to dictionaries, then to **JSON**,\
and saving/loading these from a file.

- Serialization: When an object is saved, it is first converted to a dictionary using\
  the `to_dict` method of the *BaseModel* class. This dictionary is then serialized to **JSON** format.
  
- Deserialization: When objects are loaded, the **JSON** file is deserialized back into a dictionary,\
  and each dictionary is then converted back into an object of the appropriate class.

### Packages / Modules / Cyclical Imports

The models package contains various classes representing different entities in the application,\
while the engine package includes the *FileStorage* class for handling serialization and deserialization.\
The tests package contains unit tests for the models.

- Module Import: Modules are imported using relative imports within the same package.\
  For example, ``BaseModel`` is imported into ``console.py`` using ``from models.base_model import BaseModel``

- Cyclical Imports: Cyclical imports are managed by ensuring that import statements are placed\
  at the bottom of files or within functions, avoiding import loops. For instance,\
  ``BaseModel`` imports ``storage`` ``from models.engine.file_storage``,\
  but ``FileStorage`` does not import ``BaseModel`` directly, avoiding a circular dependency.

### Layered Architecture

The *BaseModel* class works as the father class for all other models, providing common attributes and methods.\
The *FileStorage* class acts as the data access layer, handling the serialization and deserialization of objects.

- The *BaseModel* class provides a common structure for all models, including attributes for **id**,\
  `created_at`, and `updated_at`, and methods for saving and converting objects to dictionaries.

- The `FileStorage` class acts as the data access layer, managing the persistence of objects\
  to a file. It provides methods for saving objects to a **JSON** file and loading them back into memory.

### Interfaces (Storage)
 
The *FileStorage* class acts as an interface for *storage*.

- FileStorage: The ``FileStorage`` class provides a unified interface for saving and loading objects.\
 It uses a dictionary to store objects and serializes this dictionary to a **JSON** file.

- Abstraction Layer: The abstraction is provided by the storage module, which creates a single instance of\
   ``FileStorage`` and provides access to its methods through this instance.

### Abstract Classes (BaseClass)

The ``BaseModel`` class is an abstract class that provides a common structure and\
behavior for all models in the application. It ensures that all models have a consistent\
set of attributes and methods.

- BaseModel Class: The `BaseModel` class is an abstract class that defines common attributes and\
  methods for all models.
  
- Inheritance: Other model classes, such as `User`, `State`, and `City`, inherit from `BaseModel`.\
  This inheritance ensures that all models share the same base attributes and methods.
  Hierarchical inheritance is a type of inheritance where multiple subclasses inherit from\
  a single base class.

## Project scheme

<p align="center">
  <img src="https://i.imgur.com/TsuYBxr.png">
</p>

## File Structure

The project is organized into the following directories and files:

- `console.py` - The entry point of the command interpreter for the console component.

- `models/` - Contains the classes, such as `BaseModel`, `User`, `State`, `City`,
  `Amenity`, `Place`, and `Review`.
  
- `models/engine/` - Contains the `file_storage.py` file, which handles the
  serialization and deserialization of objects to and from JSON files.
  
- `tests/` - Contains unit tests for the application.

## Usage
* All files are interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
* All code use the PEP 8 style (version 2.7.*)
* The console works in interactive mode:
```sh
$ ./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  help  quit

(hbnb) 
(hbnb) 
(hbnb) quit
$
```

The console also works in non-interactive mode:
```sh
$ echo "help" | ./console.py
(hbnb)

Documented commands (type help <topic>):
========================================
EOF  help  quit
(hbnb) 
$
$ cat test_help
help
$
$ cat test_help | ./console.py
(hbnb)

Documented commands (type help <topic>):
========================================
EOF  help  quit
(hbnb) 
$
```

## How to use the commands

| Component 	| Description 	|
|:--------------------------:	|:------------------------------------------------------------:	|
| help | Displays all commands available. |
| create | Create object and prints it's id. |
| update | Updates an object with a new attribute. |
| destroy | Destroys an specified object. |
| show | Retrieves an object from a file, a database. |
| all | Displays all objects in a class. |
| quit | Exits the console. |

## Testing

* All unittests can be executed with:

```sh
python3 -m unittest discover tests
```
* All tests should also pass in non-interactive mode:

```sh
$ echo "python3 -m unittest discover tests" | bash
```

---

## Dependencies and Installation Instructions

- Latest version of Python 3.8.5 or later.

### Installing

1. Clone the repository to your local machine.
  ```
  $ git clone https://github.com/alriffaud/holbertonschool-AirBnB_clone.git
  ```
2. Navigate to the project directory.

### Running the Project

After setting up your environment, you can run the console by executing `./console.py`.

---

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

## Table of Content
* [Environment](#environment)
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation
* Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | ./console.py`

## File Descriptions
[console.py](console.py) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 

#### `models/` directory contains classes used for this project:
[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:
* [amenity.py](/models/amenity.py)
* [city.py](/models/city.py)
* [place.py](/models/place.py)
* [review.py](/models/review.py)
* [state.py](/models/state.py)
* [user.py](/models/user.py)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances
* `def all(self)` - returns the dictionary __objects
* `def new(self, obj)` - sets in __objects the obj with key <obj class name>.id
* `def save(self)` - serializes __objects to the JSON file (path: __file_path)
* ` def reload(self)` -  deserializes the JSON file to __objects

#### `/tests` directory contains all unit test cases for this project:
[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:
* `def setUpClass(cls)`- Set up for the doc tests
* `def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8
* `def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8
* `def test_bm_module_docstring(self)` - Test for the base_model.py module docstring
* `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
* `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:
* `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
* `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
* `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
* `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8
* `def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8
* `def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring
* `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8
* `def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8
* `def test_city_module_docstring(self)` - Test for the city.py module docstring
* `def test_city_class_docstring(self)` - Test for the City class docstring

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8
* `def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8
* `def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring
* `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.
* `def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.
* `def test_place_module_docstring(self)` - Test for the place.py module docstring
* `def test_place_class_docstring(self)` - Test for the Place class docstring

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8
* `def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8
* `def test_review_module_docstring(self)` - Test for the review.py module docstring
* `def test_review_class_docstring(self)` - Test for the Review class docstring

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8
* `def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8
* `def test_state_module_docstring(self)` - Test for the state.py module docstring
* `def test_state_class_docstring(self)` - Test for the State class docstring

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8
* `def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8
* `def test_user_module_docstring(self)` - Test for the user.py module docstring
* `def test_user_class_docstring(self)` - Test for the User class docstring


## Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

## Bugs
No known bugs at this time. 

## Authors :black_nib:
- Alberto Riffaud - [GitHub](https://github.com/alriffaud) | [Linkedin](https://www.linkedin.com/in/alberto-riffaud)
- Joaquin Fernandez - [Github](https://github.com/Joaquinfer7688)
- Alexa Orrico - [Github](https://github.com/alexaorrico) 
- Jennifer Huang - [Github](https://github.com/jhuang10123)

Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection. 
