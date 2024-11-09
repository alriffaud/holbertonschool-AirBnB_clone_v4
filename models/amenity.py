#!/usr/bin/python
""" This module defines the class Amenity. """
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship


class Amenity(BaseModel, Base):
    """ This class defines the attributes of Amenity.
    Attributes:
        name (str): the name of the amenity
    """
    if models.storage_t == 'db':
        __tablename__ = 'amenities'
        name = Column(String(128), nullable=False)
    else:
        name = ""

    def __init__(self, *args, **kwargs):
        """ This method initializes an instance of Amenity.
        Args:
            args (tuple): the arguments
            kwargs (dict): a dictionary containing the key/value pairs of
            instances
        """
        super().__init__(*args, **kwargs)
