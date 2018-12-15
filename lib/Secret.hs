{-# LANGUAGE DeriveGeneric #-}

module Secret where

import Data.Aeson (FromJSON)
import Data.Map.Strict (Map)
import Data.Text (Text)
import GHC.Generics (Generic)

data Secret = Secret
  { getHardcodedUsers     :: !(Map Text Text)
  , getGitLabClientId     :: !Text
  , getGitLabClientSecret :: !Text
  , getApproot            :: !Text
  , getPridynPath         :: !String
  , getPristaPath         :: !String
  } deriving (Generic, Show)

instance FromJSON Secret