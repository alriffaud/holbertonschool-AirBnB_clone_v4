#!/usr/bin/python
""" This module defines the class Review"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey


class Review(BaseModel, Base):
    """ This class defines the attributes of Review. """
    if models.storage_t == 'db':
        __tablename__ = 'reviews'
        place_id = Column(String(60), ForeignKey('places.id'), nullable=False)
        user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
        text = Column(String(1024), nullable=False)
    else:
        place_id = ""
        user_id = ""
        text = ""

    def __init__(self, *args, **kwargs):
        """ This method initializes an instance of Review.
        Args:
            args (tuple): the arguments
            kwargs (dict): a dictionary containing the key/value pairs of
            instances
        """
        super().__init__(*args, **kwargs)
