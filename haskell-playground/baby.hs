import Control.Monad
import Data.Map as Map
import qualified Data.Set as Set   

doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNumber x =   if x > 100
                        then x
                        else doubleMe x

doubleSmallNumber' x =  (if x > 100
                        then x
                        else doubleMe x) + 1


odd x = (mod x 2) /= 0

boomBangs xs = [ if x < 10 then "Boom" else "Bang" | x <- xs, Main.odd x]

removeNonUpperCase :: [Char] -> [Char]
removeNonUpperCase s = [ c | c <- s, c `elem` ['A'..'Z']]

charName :: Char -> String
charName 'a' = "Arturo"
charName 'b' = "Bob"
charName 'c' = "Carlos"

isUpperAlphaNum :: Char -> Bool
isUpperAlphaNum = (`elem` ['A'..'Z'])

applyTwice :: (a -> a) -> a -> a
applyTwice f a = f ( f a )

data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show)

data TrafficLight = Red | Green | Yellow

instance Eq TrafficLight where
    Red == Red = True
    Green == Green = True
    Yellow == Yellow = True
    _ == _ = False

text1 = "Hey buddy"   
text2 = "This tutorial is for Haskell"
  
main = do  
   let set1 = Set.fromList text1   
       set2 = Set.fromList text2 
   print(set1) 
   print(set2)    